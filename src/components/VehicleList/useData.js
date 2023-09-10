import { useState, useEffect } from 'react';

import getData  from '../../api';

export default function useData() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData()
      .then((response) => setVehicles(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return ([
    loading,
    error,
    vehicles,
  ]
  );
}

export function usePartial() {
  const [partial, setPartial] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getPartial()
      .then((response) => setPartial(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return ([
    loading,
    error,
    partial,
  ]
  );
}
