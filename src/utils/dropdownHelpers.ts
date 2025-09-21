// utils/dropdownHelpers.ts

// Generic toggle function for any dropdown
// Centralized helper for all dropdowns
export const toggleDropdownHelper = (
  id: string,
  currentOpen: string | null,
  setOpen: (val: string | null) => void
) => {
  setOpen(currentOpen === id ? null : id);
};


