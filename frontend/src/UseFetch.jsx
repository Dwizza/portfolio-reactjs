import useFetchData from "./useFetchdata";

function UseFetch(){
    const users = useFetchData('http://127.0.0.1:8000/api/users')
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