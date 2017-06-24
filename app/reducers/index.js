const defaultState = {
	test: [],
}

export default function (state = defaultState, { type, payload }) {
	switch (type) {
	default:
		return {
			...state
		}
	}
}
