import { useEffect, useState } from 'react';

export const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en el fetch');
        }
        // Asegúrate de convertir la respuesta a JSON
        return response.json();
      })
      .then((data) => {
        setData(data); // Aquí ya tienes los datos de la API
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
};
