import axios from 'axios';
import { nanoid } from 'nanoid';

const API_KEY = 'dcNmkoiM9dUzOfAW_cNG5_';
export const APP_ID = 'dcPdXeWQ9jo4kAW6OkdCkP';
export const ENTITY_ID = 'clseFdS8nbW4yDW6fop8on';
export const FIELD_ID = 'cBxSoAm8noW4eNW5WYrujK';
axios.defaults.baseURL = 'https://quintadb.com/apps';

const note = {
  values: {
    entity_id: ENTITY_ID,
    [FIELD_ID]: " ",
  },
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

export const updateNoteApi = (id, updatedNote) => {
  return axios
    .put(`${APP_ID}/dtypes/${id}.json`, updatedNote, {
      params: {
        rest_api_key: API_KEY,
      },
    })
    .then(r => r.data);
};