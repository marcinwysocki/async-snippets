/**
 * redux-saga
 */

import { takeLatest } from 'redux-saga/effects';
import Api from './path/to/api';

function* watchFetchProducts() {
    yield takeLatest('PRODUCTS_REQUESTED', fetchProducts);
}

function* fetchProducts() {
    const products = yield call(Api.fetch, '/products');
    console.log(products);
}
