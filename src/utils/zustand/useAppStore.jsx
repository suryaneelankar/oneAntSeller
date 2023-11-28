import {create} from 'zustand';

const useAppStore = create(set => ({
  isLoading: false,
  setIsLoading: value => set({isLoading: value}),

  fetchingProduct: false,
  setFetchingProduct: value => set({fetchingProduct: value}),

  productCategory: [],
  setProductCategory: value => set({productCategory: value}),

  products: [],
  setProducts: value => set({products: value}),

  productsSearchResult: [],
  setProductsSearchResult: value => set({productsSearchResult: value}),

  savedProductsId: [],
  setsavedProductsId: value => set({savedProductsId: value}),

  savedProducts: [],
  setSavedProducts: value => set({savedProducts: value}),

  groupMember: [],
  setGroupMember: value => set({groupMember: value}),
}));

export default useAppStore;
