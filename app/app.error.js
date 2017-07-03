/**
 * Gestion globale des erreurs, peut être surchargé par chaque service
 */
export default function ErrorFactory() {
  return {
    responseError: () => {
      // Todo affichage propre des erreurs
      // gérer différent message en fonction 500 - 400
      alert('Une erreur est survenue sur le serveur'); // eslint-disable-line no-undef
    },
  };
}
