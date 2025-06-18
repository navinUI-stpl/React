import { Users } from "@/@types/Users";
import { allUsers } from "@/services/users";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { deleteUser } from "@/services/users";


const userList = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

    const getUsers = async () => {
      const data = await allUsers();
      setUsers(data);
    };

  const deleteHandle =  async (id:number) =>{
      const res = await deleteUser(id);
      setUsers(users => users.filter(user => user.id !== id));
      console.log('User deleted:', res);

  }

  return (
    <div>
       <div className="float-end mb-2">
         <button className="p-2 bg-blue-500 text-white" onClick={() => navigate('/user-form')}>Add User</button>
       </div>
           <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b text-left">Username</th>
            <th className="px-4 py-2 border-b text-left">Email</th>
            <th className="px-4 py-2 border-b text-left">Password</th>
            <th className="px-4 py-2 border-b text-left">Action</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((user) => {
            return (
               <tr key={user.id}>
                <td className="px-4 py-2 border-b text-left">{user.userName}</td>
                <td className="px-4 py-2 border-b text-left">{user.email}</td>
                <td className="px-4 py-2 border-b text-left">{user.password}</td>
                <td className="px-4 py-2 border-b text-left">
                  <div className="flex gap-2">
                    <button className="text-blue-500 bg-blue-300 p-1.5" onClick={() => navigate(`/user-form/${user.id}`)}>Edit</button>
                    {/* <button className="text-red-500 bg-red-300 p-1.5">Delete</button> */}
                  <button className="text-red-500 bg-red-300 p-1.5" onClick={() => deleteHandle(user.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            )
          })
        }
        </tbody>
       
        </table>
     </div>
      )

    }

  


export default userList
