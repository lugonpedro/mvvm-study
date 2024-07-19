import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useUsersModel() {
  const { isPending, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://reqres.in/api/users");
      console.log(res.data);
      return res.data;
    },
  });

  return {
    isPending,
    error,
    data,
  };
}
