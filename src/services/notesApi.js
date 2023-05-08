import axios from 'axios';

const API_KEY = 'dcImk9WOfcP40tywRdLSoU';
export const APP_ID = 'brvmkyWQbcoOkjW47cQmk3';
export const ENTITY_ID = 'ddV24MWPnkvQbAWQ3dKgfA';
export const FIELD_ID = 'c2W7fIW59dJRPpWP55W7H_';
axios.defaults.baseURL = 'https://quintadb.com/apps';

const note = {
  values: {
    entity_id: ENTITY_ID,
    [FIELD_ID]: " ",
  },
};

const updateNote = (value) => {
  return {values: {
    [FIELD_ID]: value,
  }}
};

export const getAllNotesApi = () => {
  return axios
    .get(`/${APP_ID}/dtypes/entity/${ENTITY_ID}.json`, {
      params: {
        rest_api_key: API_KEY,
        page: 1,
        per_page: 1500,
        fetch_all: true
      },
    })
    .then(r => r.data);
};

export const addNoteApi = () => {
  return axios
    .post(
      `/${APP_ID}/dtypes.json`,
      note,
      {
        params: {
          rest_api_key: API_KEY,
        },
      }
    )
    .then(r => r.data);
};

export const removeNoteApi = (id) => {
  return axios
    .delete(`${APP_ID}/dtypes/${id}.json`, {
      params: {
        rest_api_key: API_KEY,
      },
    })
    .then(r => r.data);
};

export const updateNoteApi = (id, updatedValue) => {
  return axios
    .put(`${APP_ID}/dtypes/${id}.json`, updateNote(updatedValue), {
      params: {
        rest_api_key: API_KEY,
      },
    })
    .then(r => r.data);
};