import { addNoteHandler, getAllNotesHandler, editNoteByIdHandler, deleteNoteByIdHandler } from './handler.js';

export const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        // options: {
        //     cors: {
        //         origin: ['*'],
        //     },
        // },
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];