import { Image } from '@chakra-ui/react';
import logo from "@/Assets/img/logo.svg"
export default function Logo(params) {
	return (
		<>
			<Image pl= "2" pr= "2"
                    size={'sm'}
                    src={logo}
                  />
		</>
	)
}