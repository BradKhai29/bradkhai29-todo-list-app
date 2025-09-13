import { type PropsWithChildren } from "./common/ReactExtensions/PropsWithChildren";

interface AppButtonProps {
	text?: string;
	onClick?: () => void;
}

export const AppButton = ({
	children,
	text = "Default Text",
	onClick
}: PropsWithChildren<AppButtonProps>) => {
	return <button onClick={onClick}>{children || text}</button>;
};
