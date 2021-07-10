export const ASYNC_ERROR = 'ASYNC_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const END_LOADING = 'END_LOADING'
export const START_LOADING = 'START_LOADING'
export const LOAD_SLIDER = 'LOAD_SLIDER'
export const LOAD_MENU = 'LOAD_MENU'
export const LOAD_CALCULATOR = 'LOAD_CALCULATOR'

export const initialState = () => {
	return {
        isLoading: false,
		isLogin: false,
		sliderTitle: "",
		sliderReviews: [],
		menu: [],
		calculatorTitle: "",
		calculatorDescription: "",
    }
}

const load_slider = (state,slider)=>{
	return ({
		...state, sliderTitle: slider.title, sliderReviews: slider.reviews
	})
}

const load_menu = (state,menu)=>{
	return ({
		...state, menu: menu.items,
	})
}

const load_calculator = (state,calculator)=>{
	return ({
		...state, calculatorTitle: calculator.title , calculatorDescription:calculator.description
	})
}

export const AppReducer = (state, action) => {
	switch (action.type) {
		case START_LOADING:
			return { ...state, isLoading: true }
			break;
		case END_LOADING:
			return { ...state, isLoading: false }
			break;
		case ASYNC_ERROR:
			return { ...state, errorMsg: action.payload }
			break;
		case LOAD_SLIDER:
			return load_slider(state, action.payload)
			break;
		case LOAD_MENU:
			return load_menu(state, action.payload)
			break;
		case LOAD_CALCULATOR:
			return load_calculator(state, action.payload)
			break;
		default:
			return initialState()
	}
}


