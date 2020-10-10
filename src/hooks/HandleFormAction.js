import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function useHandleFormAction(nextRoute) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (nextRoute) {
        history.push(nextRoute);
      }
    }, 3000);
  };


  return {
    loading,
    handleAction: handleAction
  };
}

export default useHandleFormAction;