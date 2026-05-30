/**
 * cards.js -- Flashcard data
 * Organized by category. Each card has a question (front) and answer (back).
 */

const CARDS = {
  javascript: [
    { q: "What does `typeof null` return in JavaScript?", a: "`\"object\"` -- this is a well-known JavaScript bug that persists for backwards compatibility." },
    { q: "What is the difference between `==` and `===`?", a: "`==` compares values with type coercion. `===` compares values AND types with no coercion." },
    { q: "What does the spread operator (`...`) do?", a: "Expands an iterable (array, string, object) into individual elements. E.g. `[...arr1, ...arr2]` merges arrays." },
    { q: "What is a closure?", a: "A function that retains access to its outer scope even after the outer function has returned." },
    { q: "What is event delegation?", a: "Attaching a single event listener to a parent element to handle events from its children via event bubbling." },
    { q: "What does `Promise.all()` do?", a: "Runs multiple promises in parallel and resolves when ALL resolve, or rejects if ANY one rejects." },
    { q: "What is the difference between `var`, `let`, and `const`?", a: "`var` is function-scoped and hoisted. `let` is block-scoped. `const` is block-scoped and cannot be reassigned." },
    { q: "What is a prototype in JavaScript?", a: "Every JS object has a `[[Prototype]]` chain. When a property isn't found on an object, JS looks up the chain." },
    { q: "What is the event loop?", a: "A mechanism that processes the call stack and task/microtask queues, enabling non-blocking async execution." },
    { q: "What is `Array.prototype.reduce()`?", a: "Iterates over an array and accumulates a single output value: `reduce((acc, cur) => acc + cur, 0)`." },
  ],
  git: [
    { q: "How do you undo the last commit but keep changes staged?", a: "`git reset --soft HEAD~1` -- moves HEAD back one commit, leaving changes in the staging area." },
    { q: "What is the difference between `git merge` and `git rebase`?", a: "`merge` preserves history with a merge commit. `rebase` rewrites history by replaying commits onto a new base." },
    { q: "How do you create and switch to a new branch in one command?", a: "`git checkout -b branch-name` or `git switch -c branch-name`" },
    { q: "What does `git stash` do?", a: "Saves uncommitted changes (staged and unstaged) to a temporary stack, leaving the working directory clean." },
    { q: "What is a detached HEAD state?", a: "When HEAD points directly to a commit instead of a branch. Changes made here won't belong to any branch." },
    { q: "How do you squash the last 3 commits into one?", a: "`git rebase -i HEAD~3` -- mark the 2nd and 3rd commits as `squash` (or `s`) in the interactive editor." },
    { q: "What does `git cherry-pick <hash>` do?", a: "Applies the changes from a specific commit onto the current branch without merging the entire branch." },
    { q: "How do you see which remote a repo is connected to?", a: "`git remote -v` -- shows all configured remotes with their fetch and push URLs." },
  ],
  linux: [
    { q: "What does `chmod 755 file.sh` do?", a: "Sets permissions: owner = rwx (7), group = r-x (5), others = r-x (5). Owner can execute; others can read/execute." },
    { q: "How do you find all .log files modified in the last 7 days?", a: "`find / -name \"*.log\" -mtime -7`" },
    { q: "What does `grep -r 'pattern' .` do?", a: "Recursively searches all files in the current directory for lines matching the pattern." },
    { q: "How do you check which process is using port 8080?", a: "`lsof -i :8080` or `ss -tlnp | grep 8080`" },
    { q: "What is the difference between a hard link and a symbolic link?", a: "A hard link points to the same inode. A symlink is a pointer to a path -- it breaks if the target is deleted." },
    { q: "How do you background a running process?", a: "Press `Ctrl+Z` to suspend, then `bg` to resume in the background. Or append `&` when starting the command." },
    { q: "What does `ps aux` show?", a: "All running processes for all users with CPU%, MEM%, PID, and command." },
    { q: "What does `>/dev/null 2>&1` mean?", a: "Redirects stdout to /dev/null (discard) and stderr (fd 2) to stdout (fd 1), silencing all output." },
  ],
  networking: [
    { q: "What is the difference between TCP and UDP?", a: "TCP is connection-oriented with guaranteed delivery and ordering. UDP is connectionless, faster, with no delivery guarantee." },
    { q: "What happens during a TCP three-way handshake?", a: "1. Client sends SYN. 2. Server replies SYN-ACK. 3. Client sends ACK. Connection established." },
    { q: "What is the difference between a public and private IP address?", a: "Private IPs (10.x, 172.16-31.x, 192.168.x) are not routable on the internet. Public IPs are globally unique and routable." },
    { q: "What does DNS do?", a: "Translates human-readable domain names (e.g. google.com) to IP addresses via a distributed hierarchical system." },
    { q: "What is the purpose of a subnet mask?", a: "Defines which portion of an IP address identifies the network vs. the host. E.g. /24 = 255.255.255.0." },
    { q: "What is NAT?", a: "Network Address Translation -- maps private IPs to a public IP so multiple devices can share one public address." },
    { q: "What does a load balancer do?", a: "Distributes incoming traffic across multiple servers to improve availability, reliability, and performance." },
    { q: "What is the OSI model? Name the 7 layers.", a: "Physical, Data Link, Network, Transport, Session, Presentation, Application. 'Please Do Not Throw Sausage Pizza Away'." },
  ],
  security: [
    { q: "What is SQL injection?", a: "Inserting malicious SQL into input fields to manipulate database queries. Prevented with parameterized queries." },
    { q: "What is the difference between authentication and authorization?", a: "Authentication = verifying who you are. Authorization = verifying what you're allowed to do." },
    { q: "What is a CSRF attack?", a: "Cross-Site Request Forgery -- tricks an authenticated user into submitting a forged request. Prevented with CSRF tokens or SameSite cookies." },
    { q: "What is XSS?", a: "Cross-Site Scripting -- injecting malicious scripts into web pages viewed by other users. Prevented by sanitizing/escaping user input." },
    { q: "What is the difference between symmetric and asymmetric encryption?", a: "Symmetric uses the same key to encrypt and decrypt. Asymmetric uses a public/private key pair." },
    { q: "What is hashing and how is it different from encryption?", a: "Hashing is one-way (cannot be reversed). Encryption is two-way (reversible with a key). Use bcrypt to hash passwords." },
    { q: "What is a man-in-the-middle attack?", a: "An attacker secretly intercepts communication between two parties who believe they're communicating directly." },
  ],
};
