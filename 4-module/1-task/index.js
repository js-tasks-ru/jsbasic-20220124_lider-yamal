function makeFriendsList(friends) {
  const list = document.createElement("ul");

  for (friend of friends) {
    list.insertAdjacentHTML('beforeEnd', `<li>${friend.firstName} ${friend.lastName}</li>`);
  }

  return list;
}
