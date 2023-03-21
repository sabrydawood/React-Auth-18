import { 
	Link,
	useLocation,
} from "react-router-dom"
import {
	Breadcrumb,
	BreadcrumbItem,
	Center
} from '@chakra-ui/react'
import {
	FiArrowRightCircle
} from "react-icons/fi"


export default function History(props) {
const location = useLocation();
//	console.log(location)
	return (
		<>

				<Center bg="teal" rounded="lg" shadow='md' borderWidth='1px' pt="1" pb="1">
					<Breadcrumb spacing='8px' separator={<FiArrowRightCircle color='gray.500' align={"center"} />}>
						<BreadcrumbItem>
							<Link to='/' state={{ name: "Islamic" }}>
								Islamic
							</Link>
						</BreadcrumbItem>


						<BreadcrumbItem isCurrentPage>
							<p>
{location.pathname.substring(1)}
							</p>
						</BreadcrumbItem>

					</Breadcrumb>
				</Center>

		</>
	)
}