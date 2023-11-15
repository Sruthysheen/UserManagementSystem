import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { listUser } from "../slices/adminApiSlice";

const TABLE_HEAD = ["Name", "Email", "Created At", "", ""];

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const { adminInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminInfo) {
      navigate('/adminLogin');
    }
  }, [adminInfo]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await listUser();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: "url('/images/blaack.jpg')" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-between m-5 bg-black bg-opacity-50">
        <div className="flex flex-col items-center rounded-md bg-neutral-800 bg-opacity-80 lg:w-6/12">
          <Card className="w-full h-full overflow-auto">
            <table className="w-full text-left table-auto min-w-max bg-neutral-200 bg-opacity-80">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users ? (
                  users.map(({ _id, name, email, createdAt }) => (
                    <tr key={_id}>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {email}
                        </Typography>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {formatDate(createdAt)}
                        </Typography>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Link to='/editUser'>
                        <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                          Edit
                        </Typography>
                        </Link>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                          Delete
                        </Typography>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-4 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        No user Found
                      </Typography>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Card>
          <div className="flex mt-8"></div>
          <br /> <br />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
