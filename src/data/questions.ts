import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "¿Cuál es tu rango de edad?",
    options: [
      {
        id: "a",
        text: "20-30 años",
        points: { antiage: 1, antimanchas: 2, limpiador: 3, micelar: 2 }
      },
      {
        id: "b", 
        text: "31-40 años",
        points: { antiage: 2, antimanchas: 3, limpiador: 2, micelar: 1 }
      },
      {
        id: "c",
        text: "41-50 años", 
        points: { antiage: 3, antimanchas: 3, limpiador: 1, micelar: 1 }
      },
      {
        id: "d",
        text: "Más de 50 años",
        points: { antiage: 4, antimanchas: 2, limpiador: 1, micelar: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "¿Cuál es tu principal preocupación sobre tu piel?",
    options: [
      {
        id: "a",
        text: "Líneas de expresión y arrugas",
        points: { antiage: 4, antimanchas: 1, limpiador: 1, micelar: 1 }
      },
      {
        id: "b",
        text: "Manchas y tono desigual",
        points: { antiage: 1, antimanchas: 4, limpiador: 1, micelar: 1 }
      },
      {
        id: "c",
        text: "Poros dilatados y impurezas",
        points: { antiage: 1, antimanchas: 1, limpiador: 4, micelar: 2 }
      },
      {
        id: "d",
        text: "Deshidratación y falta de luminosidad",
        points: { antiage: 2, antimanchas: 2, limpiador: 1, micelar: 3 }
      }
    ]
  },
  {
    id: 3,
    text: "¿Cómo describes tu tipo de piel?",
    options: [
      {
        id: "a",
        text: "Grasa",
        points: { antiage: 1, antimanchas: 2, limpiador: 4, micelar: 3 }
      },
      {
        id: "b",
        text: "Mixta",
        points: { antiage: 2, antimanchas: 2, limpiador: 3, micelar: 2 }
      },
      {
        id: "c",
        text: "Seca",
        points: { antiage: 3, antimanchas: 1, limpiador: 2, micelar: 4 }
      },
      {
        id: "d",
        text: "Sensible",
        points: { antiage: 2, antimanchas: 1, limpiador: 1, micelar: 4 }
      }
    ]
  },
  {
    id: 4,
    text: "¿Con qué frecuencia te limpias el rostro?",
    options: [
      {
        id: "a",
        text: "Solo por las noches",
        points: { antiage: 2, antimanchas: 2, limpiador: 2, micelar: 3 }
      },
      {
        id: "b",
        text: "Mañana y noche",
        points: { antiage: 2, antimanchas: 2, limpiador: 3, micelar: 2 }
      },
      {
        id: "c",
        text: "Varias veces al día",
        points: { antiage: 1, antimanchas: 1, limpiador: 4, micelar: 1 }
      },
      {
        id: "d",
        text: "Ocasionalmente",
        points: { antiage: 1, antimanchas: 1, limpiador: 1, micelar: 4 }
      }
    ]
  },
  {
    id: 5,
    text: "¿Usas maquillaje regularmente?",
    options: [
      {
        id: "a",
        text: "Todos los días",
        points: { antiage: 1, antimanchas: 2, limpiador: 3, micelar: 4 }
      },
      {
        id: "b",
        text: "Solo para ocasiones especiales",
        points: { antiage: 2, antimanchas: 2, limpiador: 2, micelar: 2 }
      },
      {
        id: "c",
        text: "Raramente",
        points: { antiage: 3, antimanchas: 2, limpiador: 2, micelar: 1 }
      },
      {
        id: "d",
        text: "Nunca",
        points: { antiage: 3, antimanchas: 1, limpiador: 1, micelar: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "¿Cuál es tu mayor preocupación actual?",
    options: [
      {
        id: "a",
        text: "Prevenir el envejecimiento",
        points: { antiage: 4, antimanchas: 1, limpiador: 1, micelar: 1 }
      },
      {
        id: "b",
        text: "Corregir manchas existentes",
        points: { antiage: 1, antimanchas: 4, limpiador: 1, micelar: 1 }
      },
      {
        id: "c",
        text: "Limpiar profundamente",
        points: { antiage: 1, antimanchas: 1, limpiador: 4, micelar: 2 }
      },
      {
        id: "d",
        text: "Hidratar y nutrir",
        points: { antiage: 2, antimanchas: 1, limpiador: 1, micelar: 3 }
      }
    ]
  },
  {
    id: 7,
    text: "¿Tienes tiempo para una rutina de cuidado facial completa?",
    options: [
      {
        id: "a",
        text: "Sí, me gusta dedicar tiempo",
        points: { antiage: 3, antimanchas: 2, limpiador: 2, micelar: 1 }
      },
      {
        id: "b",
        text: "Moderadamente, 5-10 minutos",
        points: { antiage: 2, antimanchas: 3, limpiador: 2, micelar: 2 }
      },
      {
        id: "c",
        text: "Poco tiempo, rutina rápida",
        points: { antiage: 1, antimanchas: 1, limpiador: 3, micelar: 4 }
      },
      {
        id: "d",
        text: "Muy poco tiempo disponible",
        points: { antiage: 1, antimanchas: 1, limpiador: 2, micelar: 4 }
      }
    ]
  },
  {
    id: 8,
    text: "¿Has notado cambios recientes en tu piel?",
    options: [
      {
        id: "a",
        text: "Más líneas de expresión",
        points: { antiage: 4, antimanchas: 1, limpiador: 1, micelar: 1 }
      },
      {
        id: "b",
        text: "Aparición de manchas",
        points: { antiage: 1, antimanchas: 4, limpiador: 1, micelar: 1 }
      },
      {
        id: "c",
        text: "Más impurezas y granitos",
        points: { antiage: 1, antimanchas: 1, limpiador: 4, micelar: 2 }
      },
      {
        id: "d",
        text: "Sequedad y pérdida de luminosidad",
        points: { antiage: 2, antimanchas: 2, limpiador: 1, micelar: 4 }
      }
    ]
  },
  {
    id: 9,
    text: "¿Qué resultado esperas obtener más pronto?",
    options: [
      {
        id: "a",
        text: "Piel más firme y joven",
        points: { antiage: 4, antimanchas: 1, limpiador: 1, micelar: 1 }
      },
      {
        id: "b",
        text: "Tono de piel más uniforme",
        points: { antiage: 1, antimanchas: 4, limpiador: 1, micelar: 2 }
      },
      {
        id: "c",
        text: "Piel más limpia y sin impurezas",
        points: { antiage: 1, antimanchas: 1, limpiador: 4, micelar: 2 }
      },
      {
        id: "d",
        text: "Piel más hidratada y luminosa",
        points: { antiage: 2, antimanchas: 2, limpiador: 1, micelar: 4 }
      }
    ]
  },
  {
    id: 10,
    text: "¿Cuál de estos pasos consideras más importante?",
    options: [
      {
        id: "a",
        text: "Usar productos anti-edad",
        points: { antiage: 4, antimanchas: 1, limpiador: 1, micelar: 1 }
      },
      {
        id: "b",
        text: "Tratar manchas y pigmentación",
        points: { antiage: 1, antimanchas: 4, limpiador: 1, micelar: 1 }
      },
      {
        id: "c",
        text: "Limpiar correctamente el rostro",
        points: { antiage: 1, antimanchas: 1, limpiador: 4, micelar: 2 }
      },
      {
        id: "d",
        text: "Desmaquillar e hidratar",
        points: { antiage: 1, antimanchas: 1, limpiador: 2, micelar: 4 }
      }
    ]
  }
];