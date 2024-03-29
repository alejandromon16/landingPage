export const manifest = {
	appDir: "_app",
	assets: new Set(["background/Billing Management Console.pdf","background/image.jpeg","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-8807867f.js","js":["start-8807867f.js","chunks/index-9a025cb2.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
