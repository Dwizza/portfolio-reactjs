import useFetchData from "./useFetchdata";

function UseFetch(){
    const users = useFetchData(`${import.meta.env.VITE_API_URL}/api/users`)
    console.log(users);

return (
    <div>
      <p>My name :</p>
        {users?.map(user => (
          <>
            <span key={user.id}>{user.name}</span> <br />
          </>
        ))} 
    </div>
)
}

export default UseFetch