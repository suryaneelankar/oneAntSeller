import {create} from 'zustand';

const useFilterStore = create(set => ({
  selectedStores: '',
  setSelectedStores: value => set({selectedStores: value}),

  selectedMiles: 10,
  setSelectedMiles: value => set({selectedMiles: value}),

  selectedProductCategory: [],
  setSelectedProductCategory: value => set({selectedProductCategory: value}),

  selectedPriceRage: [],
  setSelectedPriceRage: value => set({selectedPriceRage: value}),

  selectedSortBy: null,
  setSelectedSortBy: value => set({selectedSortBy: value}),
}));

export default useFilterStore;
