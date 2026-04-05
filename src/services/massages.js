import imgHolistico from '../assets/MasajeHolistico.jpg'
import imgAyurbeda from '../assets/MasajeAyurbeda.jpg'
import imgQuiromasaje from '../assets/Quiromasaje.jpg'
import imgPiernas from '../assets/MasajePiernas.jpg'
import imgSonoterapia from '../assets/Sonoterapia.jpg'


const massages = [
        {
        id: 'masaje-holistico',
        name: 'massage_holistic_title',
        description: 'massage_holistic_description',
        duration: 'massage_holistic_duration',
        price:'massage_holistic_price',
        img: imgHolistico
        },

        {
        id: 'masaje-ayurveda',
        name: 'massage_ayurveda_title',
        description: 'massage_ayurveda_description',
        duration: 'massage_ayurveda_duration',
        price:'massage_ayurveda_price',
        img: imgAyurbeda
        },

        {
        id: 'quiromasaje',
        name: 'quiromasaje_title',
        description: 'quiromasaje_description',
        duration: 'quiromasaje_duration',
        price:'quiromasaje_price',
        img: imgQuiromasaje
        },

        {
        id: 'masaje-piernas',
        name: 'massage_legs_title',
        description: 'massage_legs_description',
        duration: 'massage_legs_duration',
        price:'massage_legs_price',
        img: imgPiernas
        },
        {
        id: 'massage_sonotherapy_title',
        name: 'massage_sonotherapy_title',
        description: 'massage_sonotherapy_description',
        duration: 'massage_sonotherapy_duration',
        price:'massage_sonotherapy_price',
        img: imgSonoterapia
        }
    ]

    export default massages;