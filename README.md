## Limitations(Tradeoffs between functionality and completeness):

- Since it is a high fidelity prototype that does not use any databases, we didn't include any photo saving or avatar saving functionalities.
  - This is kind off imitated by randomly generating a list or memories.
  - While they could be hardcoded this adds uniqueness to those features.
- It was not built as a webapp or a separate app so when we open it from mobile the site adds a scroll bar.
- It was not possible to incorporate companion accessories such as a bracelet that notifies you when a call happens.

---

### Installation:

1. Download the codebase
2. Open it through:
   1. Live server extension in vscode
   2. By opening index.html in the browser
3. The page should open up now.

---

### Operating Instructions:

- While the user is at the homescreen (index.html), an notification will randomly come within reasonable timing and prompt him to answer a group call.
- After answering the user is placed in a waiting room, he will be there till there are at least 2 other users that have connected.
- Then he gets redirected to the group call interface and the call will firstly last for the duration of the timer in the middle.
- The user can leave at any time he wants, however if he is still present in the call when the timer is close to ending a prompt appears asking whether to continue the call.
- During the call the user can poke, capture moment, enter settings or moments section, leave the call.
  - Poke will ring the group members that have not yet joined or they declined.
  - Capture moment takes a screenshot of the active video call and saves it in the group moments.
  - Entering settings or moments goes to the respective page.
- If the user leaves during a call, he gets redirected to the main page of the app.
- The main page has the following features:
  - Go to Settings
  - Battery indicator for a companion bracelet or accessory
  - Go to Memories
  - Go to Members
    a) Going to Members: - A list of all family members is displayed
    b) Going to Memories: - A grid list of all saved memories appears
    c) Going to Settings: - Fields for changing the username and a field displaying our braceletsID is shown.

---

### Other deliverables connected to project:

**Hosted Page**: [OnlyOnce](onlyfam.vercel.app)  
**Project Video**: [Project Video]()
