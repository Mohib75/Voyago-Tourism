import Button from "../components/Button"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const MyList = () => {
	const { user } = useAuth()
	const [myTouristData, setMyTouristData] = useState([])

	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`https://voyago-tourism-server.vercel.app/touristsSpot/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data)
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Tourists Spot has been deleted.",
								icon: "success",
							})

							const remaining = myTouristData.filter((tData) => tData._id !== _id)
							setMyTouristData(remaining)
						}
					})
			}
		})
	}

	useEffect(() => {
		fetch(`https://voyago-tourism-server.vercel.app/myList/${user?.email}`)
			.then((res) => res.json())
			.then((data) => {
				setMyTouristData(data)
			})
	}, [user])
	return (
		<div className='flex flex-col items-center mt-12 gap-4'>
			{myTouristData &&
				myTouristData.map((tData, index) => (
					<div className='overflow-x-auto bg-[#17171a] rounded-2xl w-[85%] sm:w-[70%]' key={index}>
						<table className='table'>
							{/* head */}
							<thead>
								<tr className='text-white text-lg font-semibold'>
									<th></th>
									<th>Spot Name</th>
									<th>Country Name</th>
									<th>Average Cost Per Person</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									<th>{index + 1}</th>
									<td>{tData.spot_name}</td>
									<td>{tData.country_name}</td>
									<td>{tData.average_cost}</td>
									<td>
										<div className='flex gap-4'>
											<Link to={`/touristsSpotUpdate/${tData._id}`}>
												<Button className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white w-[120px] text-lg font-semibold leading-5 hover:scale-105 transform transition-all duration-500'>
													Update
												</Button>
											</Link>
											<Button
												onClick={() => handleDelete(tData._id)}
												className='btn rounded-full bg-transparent border-solid border-[1px] border-[#29d9d5] hover:bg-[#29d9d5] text-white w-[120px] text-lg font-semibold leading-5 hover:scale-105 transform transition-all duration-500'>
												Delete
											</Button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				))}
		</div>
	)
}

export default MyList
