/**
 * Created by wlh on 2017/6/9.
 */

'use strict';
import API from '@jingli/dnode-api';

export abstract class AbstractDataSupport<T> {

    async getData(name: string, params: Object) :Promise<T[]>{
        return API['dtask_mgr'].runTask({name: name, input: params}) as T[];
    }
}