import { Product } from '../types/quiz';

export const products: Record<string, Product> = {
  antiage: {
    id: 'antiage',
    name: 'Age Miracle Crema Antiedad',
    description: 'Crema facial con retinol-C complex que combate los signos del envejecimiento, reduciendo líneas de expresión y arrugas mientras hidrata profundamente.',
    benefits: [
      'Reduce líneas de expresión y arrugas',
      'Mejora la firmeza y elasticidad',
      'Hidratación intensa 24 horas',
      'Estimula la renovación celular',
      'Textura suave y de rápida absorción'
    ],
    image: 'https://openparke.com/ponds/Captura%20de%20Pantalla%202025-09-23%20a%20la(s)%205.42.02%20p.%c2%a0m..png'
  },
  antimanchas: {
    id: 'antimanchas',
    name: 'Age Miracle Serum Anti Manchas',
    description: 'Sérum concentrado con Niacinamida y Vitamina C que reduce visiblemente las manchas oscuras y unifica el tono de la piel.',
    benefits: [
      'Reduce manchas oscuras en 7 días',
      'Unifica el tono de la piel',
      'Aporta luminosidad natural',
      'Previene nuevas manchas',
      'Fórmula ligera de rápida absorción'
    ],
    image: 'https://openparke.com/ponds/Captura%20de%20Pantalla%202025-09-23%20a%20la(s)%205.24.07%20p.%c2%a0m..png'
  },
  limpiador: {
    id: 'limpiador',
    name: 'Age Miracle Limpiador Facial',
    description: 'Gel limpiador facial que elimina impurezas, maquillaje y células muertas mientras prepara la piel para los tratamientos anti-edad.',
    benefits: [
      'Limpieza profunda sin resecar',
      'Elimina maquillaje y impurezas',
      'Prepara la piel para tratamientos',
      'Minimiza poros dilatados',
      'Fórmula suave para uso diario'
    ],
    image: '/122674395.png'
  },
  micelar: {
    id: 'micelar',
    name: 'Age Miracle Agua Micelar',
    description: 'Agua micelar 3 en 1 que desmaquilla, limpia e hidrata en un solo paso, ideal para todo tipo de piel incluso la más sensible.',
    benefits: [
      'Desmaquilla en un solo paso',
      'No requiere enjuague',
      'Hidrata mientras limpia',
      'Apta para ojos y labios',
      'Ideal para piel sensible'
    ],
    image: 'https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00750630624816L.jpg'
  }
};