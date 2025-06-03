import { createSelector } from 'reselect'
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
    (items, name) => {
        if (name === '') {
            return items;
        } else {
            return items.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()))
        }
    }
)