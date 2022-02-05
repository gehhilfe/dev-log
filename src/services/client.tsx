function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export const clientId = () => {
  if (localStorage.getItem("clientId") == null) {
    const id = makeid(64);
    localStorage.setItem("clientId", id)
    return id
  }
  return localStorage.getItem("clientId")
}