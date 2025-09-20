import axios from "axios";


export async function forgetPasswordAction(email: string) {
  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    { email }
  );
  return data; // typically just a success message
}

export async function verifyResetCodeAction(resetCode: string) {
  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    { resetCode }
  );

  return data; 

}


export async function resetPasswordAction(email: string, newPassword: string, token: string) {
    const { data } = await axios.put(
        "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        { email, newPassword },
        {
        headers: {
            token:token
        }
        }
    );

  return data;
}
