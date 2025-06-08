
enum Permission {
	UNKNOWN,

	DEV,
	FRIEND,
	GROOMSMEN,
	BRIDESMAID,
}

type Entry = {
	people : string[];
	permissions? : Permission[];
}

export namespace Form {

	let password = "";
	const defaultFormURL = `https://docs.google.com/forms/d/e/1FAIpQLScCPsH6MWmO1GkowfsDrqMz6JgkKWkjnCKOUBdmLabTnUj0lw/viewform?usp=dialog&entry.1393499076=`;
	const friendFormURL = `https://docs.google.com/forms/d/e/1FAIpQLSdqbwScYN7D2AAtMrSS-yZ_W8EYkaDSffIoVwvKzlgi0ohcTA/viewform?usp=dialog&entry.1393499076=`;

	const entries = new Map<string, Entry>([
		["bubtown", {
			people: ["Bub"],
			permissions: [Permission.DEV, Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["coot", {
			people: ["Cootie"],
			permissions: [Permission.DEV, Permission.FRIEND],
		}],

		["bog", {
			people: ["Boggy Bog", "Bobert Penguin"],
			permissions: [Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["burrito", {
			people: ["Astrid Burrito"],
		}],

		["kmabd", {
			people: ["Mom", "Dad"],
		}],
		["metaknight", {
			people: ["Allen"],
			permissions: [Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["falco", {
			people: ["Derek"],
			permissions: [Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["dallas", {
			people: ["Aunt Jean", "Grandma"],
		}],
		["murtaugh", {
			people: ["Aunt Diane", "Uncle Pete" ,"Arthur", "Maggie"],
		}],
		["seibert", {
			people: ["Uncle Roland", "Marie" ,"Tanja", "Marcel"],
		}],
		["wang", {
			people: ["舅舅", "舅妈", "家人"],
		}],
		["muffin", {
			people: ["⛄", "Meiye"],
			permissions: [Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["pizza", {
			people: ["Clarence"],
			permissions: [Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["thai", {
			people: ["Paul"],
			permissions: [Permission.FRIEND, Permission.GROOMSMEN],
		}],
		["maplestory", {
			people: ["June", "Erika"],
			permissions: [Permission.FRIEND],
		}],
		["broforce", {
			people: ["Wei", "Diana"],
			permissions: [Permission.FRIEND],
		}],
		["fierce", {
			people: ["Kyle", "Rebecca"],
			permissions: [Permission.FRIEND],
		}],
		["mercy", {
			people: ["Kathleen", "David"],
			permissions: [Permission.FRIEND],
		}],
		["unicode", {
			people: ["Matt", "Kelsey"],
			permissions: [Permission.FRIEND],
		}],
		["lunch", {
			people: ["Chris", "Melody"],
			permissions: [Permission.FRIEND],
		}],
		["nullptr", {
			people: ["Bill", "Lucy"],
			permissions: [Permission.FRIEND],
		}],
		["runner", {
			people: ["Kelly", "Jordan"],
			permissions: [Permission.FRIEND],
		}],
		["froyo", {
			people: ["Ji-Eun"],
			permissions: [Permission.FRIEND],
		}],
		["bopoko", {
			people: ["Nhan"],
			permissions: [Permission.FRIEND],
		}],

		["youloveit", {
			people: ["Daddy"],
		}],
		["soup", {
			people: ["Mommy"],
		}],
		["palie", {
			people: ["Sharie"],
			permissions: [Permission.FRIEND, Permission.BRIDESMAID],
		}],
		["jin", {
			people: ["Lei", "Kerry", "Raymond", "Lucas"],
		}],
		["sun", {
			people: ["Minnie", "Frank", "Mila", "Miley"],
		}],
		["gundam", {
			people: ["Peter"],
		}],
		["baobing", {
			people: ["舅舅"],
		}],
		["climbing", {
			people: ["Sophia", "Simon"],
			permissions: [Permission.FRIEND],
		}],
		["panda", {
			people: ["Amanda", "Kenny", "May"],
			permissions: [Permission.FRIEND],
		}],
		["mang", {
			people: ["Stephanie"],
			permissions: [Permission.FRIEND],
		}],
		["holiday", {
			people: ["Crystal"],
			permissions: [Permission.FRIEND],
		}],
		["bob", {
			people: ["Tiffany", "Stanley"],
			permissions: [Permission.FRIEND],
		}],
		["penguin", {
			people: ["Barry"],
			permissions: [Permission.FRIEND],
		}],
		["potato", {
			people: ["Luda"],
			permissions: [Permission.FRIEND],
		}],
		["cheesecake", {
			people: ["Amy", "John"],
			permissions: [Permission.FRIEND, Permission.BRIDESMAID],
		}],
		["volleyball", {
			people: ["Amarise", "Niels"],
			permissions: [Permission.FRIEND, Permission.BRIDESMAID],
		}],
		["irvine", {
			people: ["Harinee", "Shehan"],
			permissions: [Permission.FRIEND, Permission.BRIDESMAID],
		}],
		["poris", {
			people: ["Daniel", "Margaret"],
			permissions: [Permission.FRIEND],
		}],
		["nzland", {
			people: ["Sith", "Doris"],
			permissions: [Permission.FRIEND],
		}],
		["house", {
			people: ["Liching", "Derrick"],
		}],
	]);

	export function tryPassword(value : string) : boolean {
		if (entries.has(value)) {
			password = value;
			return true;
		}

		return false;
	}

	export function name() : string {
		if (!entries.has(password)) {
			return "esteemed guest";
		}

		const people = entries.get(password).people;
		if (people.length === 0) {
			return "EMPTY PERSON LIST";
		}

		return people[0];
	}

	export function names() : string {
		return formatNames(password);
	}
	function formatNames(pw : string) : string {
		if (!entries.has(pw)) {
			return "esteemed guest";
		}

		const people = entries.get(pw).people;

		if (people.length === 0) {
			return "EMPTY PERSON LIST";
		} else if (people.length === 1) {
			return people[0];
		} else if (people.length === 2) {
			return people[0] + " and " + people[1];
		}

		let slice = people.slice(0, people.length - 1);
		slice.push("and " + people[people.length - 1]);
		return slice.join(", ");
	}

	export function link() : string {
		if (!entries.has(password)) {
			console.error("Invalid password!", password);
			return "";
		}

		const people = entries.get(password).people;

		if (people.length === 0) {
			console.error("No people!", password);
			return "";
		}

		if (isFriend()) {
			return `${friendFormURL}${people.join("%0A")}`;
		}

		return `${defaultFormURL}${people.join("%0A")}`;
	}

	export function createEmailLinks() : HTMLElement {
		let list = document.createElement("ol");

		entries.forEach((entry : Entry, pw : string) => {
			let item = document.createElement("li");

			const names = formatNames(pw);
			item.innerHTML = `<a href='./email?names=${names}&password=${pw}' target='_blank'>${names}</a>`

			list.appendChild(item);
		});

		return list;
	}

	export function isDev() : boolean {
		return hasPermission(Permission.DEV);
	}
	export function isFriend() : boolean {
		return hasPermission(Permission.FRIEND);
	}
	export function isGroomsmen() : boolean {
		return hasPermission(Permission.GROOMSMEN);
	}
	export function isBridesmaid() : boolean {
		return hasPermission(Permission.BRIDESMAID);
	}
	export function isWeddingParty() : boolean {
		return isGroomsmen() || isBridesmaid();
	}
	function hasPermission(permission : Permission) : boolean {
		if (!entries.has(password)) {
			return false;
		}

		const permissions = entries.get(password).permissions;
		if (!permissions || !permissions.includes(permission)) {
			return false;
		}

		return true;
	}
}