import firestore from '@react-native-firebase/firestore';
import useAppStore from '../zustand/useAppStore';
import {firebase} from '@react-native-firebase/auth';
import '@react-native-firebase/database';

const REALTIME_ENDPOINT =
  'https://oneant-client-apps-default-rtdb.asia-southeast1.firebasedatabase.app/';

export async function getProductCategories() {
  try {
    const response = await firestore().collection('categories').get();

    useAppStore.getState().setProductCategory(response.docs);
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error; // Propagate the error to the calling code
  }
}

export async function getAllProducts(selectedCategories) {
  try {
    const response = selectedCategories?.length
      ? await firestore()
          .collection('products')
          .where('category', 'in', selectedCategories)
          .get()
      : await firestore().collection('products').get();

    // Set the filtered products in the application state
    useAppStore.getState().setProducts(response.docs);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function getSavedProducts(productIds) {
  useAppStore.getState().setFetchingProduct(true);
  try {
    if (productIds.length == 0) {
      useAppStore.getState().setSavedProducts([]);
      return;
    }
    const response = await firestore()
      .collection('products')
      .where(firestore.FieldPath.documentId(), 'in', productIds)
      .get();

    useAppStore.getState().setSavedProducts(response.docs);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  } finally {
    useAppStore.getState().setFetchingProduct(false);
  }
}

export async function getSearchResults(input) {
  try {
    const response = await firestore()
      .collection('products')
      .where('name', '>=', input)
      .where('name', '<=', input + '\uf8ff')
      .get();

    useAppStore.getState().setProductsSearchResult(response.docs);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function updateSavedProduct(docId, newProductIds) {
  try {
    // Reference to the document in the "user-segments" collection
    const response = await firestore()
      .collection('user-segments')
      .doc(docId)
      .update({
        products_id: newProductIds,
      });
  } catch (error) {
    console.error('Error updating products_id:', error.message);
  }
}

export async function getsavedProductsIdByUid(uid) {
  try {
    const response = await firestore()
      .collection('user-segments')
      .where('uid', '==', uid)
      .get();

    useAppStore.getState().setsavedProductsId(response?.docs?.[0]);
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error;
  }
}

export function createNewGroup(
  groupName,
  members, // name,image,isAdmin,isApproved
  productId, // array
  productQty,
) {
  useAppStore.getState().setIsLoading(true);
  const groupsRef = firebase.app().database(REALTIME_ENDPOINT).ref('/Groups');

  const newGroupRef = groupsRef.push();

  newGroupRef
    .set({
      groupName: groupName,
      members: members,
      productId: productId,
      productQty: productQty,
    })
    .then(() => {
      console.log(`Group added with name: ${groupName}`);
    })
    .catch(error => {
      console.error('Error adding group:', error);
    })
    .finally(() => useAppStore.getState().setIsLoading(false));
}

export function getGroups(setVal) {
  useAppStore.getState().setFetchingProduct(true);

  try {
    firebase
      .app()
      .database(REALTIME_ENDPOINT)
      .ref('/Groups')
      .on(
        'value',
        snapshot => {
          const data = snapshot.val();

          if (!data) {
            setVal([]);
            return;
          }

          // Convert the object to an array
          const dataArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key],
          }));

          setVal(dataArray);
        },
        error => {
          console.error('Error fetching data:', error);
        },
      );
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    useAppStore.getState().setFetchingProduct(false);
  }
}

export function reqToJoinToGroup(groupId, newMemberData) {
  try {
    const membersRef = firebase
      .app()
      .database(REALTIME_ENDPOINT)
      .ref(`/Groups/${groupId}/members`);

    // Check if the user ID is already in the members array
    membersRef
      .once('value')
      .then(snapshot => {
        const currentMembers = snapshot.val() || [];

        if (
          !currentMembers.some(member => member.userId === newMemberData.userId)
        ) {
          // User ID is not present, so add the new member data
          const updatedMembers = [...currentMembers, newMemberData];

          // Update the database with the updated arrays
          membersRef.set(updatedMembers, error => {
            if (error) {
              console.error('Error updating members in group:', error);
            } else {
              console.log('Members updated in group successfully');
            }
          });
        } else {
          console.log('User is already a member of the group');
        }
      })
      .catch(error => {
        console.error('Error retrieving current members:', error);
      });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export function createNewCart(groupId, productId, productQty, callback) {
  useAppStore.getState().setIsLoading(true);
  const groupsRef = firebase.app().database(REALTIME_ENDPOINT).ref('/Carts');

  const newGroupRef = groupsRef.push();

  newGroupRef
    .set({
      productId: productId,
      groupId: groupId,
      productQty: productQty,
    })
    .then(() => {
      const docId = newGroupRef.key;
      if (callback) {
        callback(docId);
      }
      console.log(`Cart created`);
    })
    .catch(error => {
      console.error('Error adding group:', error);
    })
    .finally(() => useAppStore.getState().setIsLoading(false));
}

export async function getProductsById(setVal, id) {
  useAppStore.getState().setFetchingProduct(true);
  try {
    const response = await firestore()
      .collection('products')
      .where('id', '==', id)
      .get();

    setVal(response.docs);
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
  useAppStore.getState().setFetchingProduct(false);
}

export function getCartItemsByGroupId(groupId, setVal) {
  useAppStore.getState().setIsLoading(true);

  const cartsRef = firebase.app().database(REALTIME_ENDPOINT).ref('/Carts');

  // Use orderByChild and equalTo to filter by groupId
  cartsRef
    .orderByChild('groupId')
    .equalTo(groupId)
    .once('value')
    .then(snapshot => {
      const cartItems = [];
      snapshot.forEach(childSnapshot => {
        const cartItem = childSnapshot.val();
        cartItems.push(cartItem);
      });

      // Set the value after retrieving the data
      setVal(cartItems);

      console.log(`Cart items retrieved for groupId: ${groupId}`);
    })
    .catch(error => {
      console.error('Error getting cart items:', error);
    })
    .finally(() => useAppStore.getState().setIsLoading(false));
}

export function getGroupById(groupId, setVal) {
  const groupsRef = firebase.app().database(REALTIME_ENDPOINT).ref('/Groups');

  groupsRef
    .child(groupId)
    .once('value')
    .then(snapshot => {
      const groupData = snapshot.val();

      // Set the value after retrieving the data
      setVal(groupData);

      console.log(`Group retrieved with ID: ${groupId}`);
    })
    .catch(error => {
      console.error('Error getting group:', error);
    });
}

export function addUserIdToCart(docId, userId, callback) {
  const cartRef = firebase
    .app()
    .database(REALTIME_ENDPOINT)
    .ref(`/Carts/${docId}`);

  cartRef
    .transaction(cart => {
      if (cart) {
        // Ensure the 'paidBy' field exists
        if (!cart.paidBy) {
          cart.paidBy = [];
        }

        // Add userId to 'paidBy' array
        cart.paidBy.push(userId);

        // Update the cart
        return cart;
      }
      return cart; // If cart is null, transaction is aborted
    })
    .then(() => {
      console.log(`UserId ${userId} added to cart with docId ${docId}`);
      if (callback) {
        callback(); // Call the callback function if provided
      }
    })
    .catch(error => {
      console.error(`Error adding userId to cart with docId ${docId}:`, error);
    });
}
