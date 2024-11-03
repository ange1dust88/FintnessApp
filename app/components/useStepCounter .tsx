import { useState, useEffect } from 'react';
import { Pedometer } from 'expo-sensors';

const useStepCounter = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState<boolean | null>(null);
  const [steps, setSteps] = useState<number>(0);

  useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (available) => {
        setIsPedometerAvailable(available);
      },
      (error) => {
        console.error("Could not get pedometer availability:", error);
      }
    );

    const subscription = Pedometer.watchStepCount((result) => {
      setSteps(result.steps);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { isPedometerAvailable, steps };
};

export default useStepCounter;
