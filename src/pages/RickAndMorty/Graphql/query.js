import { gql } from 'graphql-tag';

export const OBTENER_PERSONAJES = gql`
        query personajes($page: Int!) {
        characters(page: $page) {
            info {
            count
            pages
            }
            results {
            name
            image
            id
            }
        }
        }
    `;

export const OBTENER_DETALLES_POR_ID = gql`
        query detallesId($id: ID!){
            character(id: $id) {
                id,
                name,
                status,
                species,
                type,
                gender,
                image,
                created,
                origin {
                name
                }
                location {
                name
                type
                dimension
                }
                episode {
                name
                episode
                }
            }
        }
    `;


export const OBTENER_FAVORITOS = gql`
    query favoritos($ids: [ID!]!){
        charactersByIds(ids: $ids) {
            id
            name
            status
            species
            type
            gender
            image
            created
            origin {
                name
            }
            location {
                name
            }
            episode {
                name
                episode
            }
        }
    }
`;
