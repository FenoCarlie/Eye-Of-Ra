import { createContext, useContext, useState, useEffect } from "react";

// Créer un contexte avec des valeurs initiales pour currentUser, token,
// et des fonctions setUser, setToken
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

// Composant fournisseur de contexte pour gérer l'état et fournir les valeurs du contexte
export const AuthentContext = ({ children }) => {
  // Variables d'état pour l'utilisateur et le token, initialisées à partir de sessionStorage
  const [user, setUser] = useState(() =>
    JSON.parse(sessionStorage.getItem("ACCESS_USER"))
  );
  // const [token, setToken] = useState(() =>
  //   sessionStorage.getItem("ACCESS_TOKEN")
  // );

  const [token, setToken] = useState(1234);

  // Fonction pour mettre à jour l'utilisateur et gérer sessionStorage
  const updateUser = (user) => {
    setUser(user);
    if (user) {
      sessionStorage.setItem("ACCESS_USER", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("ACCESS_USER");
    }
  };

  // Fonction pour mettre à jour le token et gérer sessionStorage
  const updateToken = (token) => {
    setToken(token);
    if (token) {
      sessionStorage.setItem("ACCESS_TOKEN", token);
    } else {
      sessionStorage.removeItem("ACCESS_TOKEN");
    }
  };

  // Effet pour effacer sessionStorage après 4 heures (expiration de session)
  useEffect(() => {
    const sessionTimeout = setTimeout(() => {
      sessionStorage.clear();
    }, 4 * 60 * 60 * 1000);

    return () => clearTimeout(sessionTimeout);
  }, []);

  // Fournir les valeurs d'état et les fonctions de mise à jour au contexte
  return (
    <StateContext.Provider
      value={{
        user,
        setUser: updateUser,
        token,
        setToken: updateToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Hook personnalisé pour accéder aux valeurs du contexte dans les composants fonctionnels
export const useAuthentContext = () => useContext(StateContext);
