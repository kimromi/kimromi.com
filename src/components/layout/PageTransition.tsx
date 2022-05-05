import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

export const PageTransition: React.FC<Props> = (props) => {
  const { route } = useRouter();

  return (
    <motion.div
      key={route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      {...props}
    />
  );
};
