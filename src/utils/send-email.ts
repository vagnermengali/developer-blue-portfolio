import { toast } from "sonner";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.message) {
        toast.success(response.message);
      } else if (response.error) {
        toast.error(response.error);
      }
    })
    .catch((err) => {
      toast.error("Erro ao enviar o e-mail");
      console.error(err);
    });
}
