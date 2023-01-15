import Navbar from 'components/Navbar';
import { FunctionComponent, ReactNode } from 'react';


interface Props {
	children: ReactNode
}


const Layout: FunctionComponent<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};


export default Layout