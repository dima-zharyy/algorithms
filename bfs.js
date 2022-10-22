// Breadth-first search - BFS

const seller = "tom";

const userFriendsGraph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["tom", "john"],
  anuj: [],
  tom: [],
  john: [],
  peggy: [],
};

const findSeller = (name) => {
  const searchQueue = [...userFriendsGraph[name]];
  const searched = [];

  while (searchQueue.length > 0) {
    const friend = searchQueue.shift();

    if (friend === seller) {
      return friend;
    }

    if (searched.includes(friend)) {
      continue;
    }

    if (userFriendsGraph[friend].length > 0) {
      searchQueue.push(...userFriendsGraph[friend]);
      searched.push(friend);
    }
  }
  return "No seller";
};

console.log(findSeller("you"));
