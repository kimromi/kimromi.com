import { ExternalServices } from '../ExternalServices';

type Props = {
  showExternalServices?: boolean;
};

export const Footer: React.FC<Props> = ({ showExternalServices = false }) => (
  <footer className="mt-20 mb-8 text-center text-xs text-tertiary">
    {showExternalServices && (
      <div className="mb-2">
        <ExternalServices />
      </div>
    )}
    &copy; {new Date().getFullYear()} kimromi
  </footer>
);
