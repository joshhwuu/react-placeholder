declare module 'enzyme' {
  export function shallow<P = {}, S = {}>(node: React.ReactElement<P>, options?: any): ShallowWrapper<P, S>;
  export function mount<P = {}, S = {}>(node: React.ReactElement<P>, options?: any): ReactWrapper<P, S>;
  export function render<P = {}>(node: React.ReactElement<P>, options?: any): any;
  
  export interface ShallowWrapper<P = {}, S = {}> {
    contains(node: any): boolean;
    getElements(): React.ReactElement[];
    find(selector: string): ShallowWrapper<any, any>;
    prop(key: string): any;
    text(): string;
    [key: string]: any;
  }
  
  export interface ReactWrapper<P = {}, S = {}> {
    contains(node: any): boolean;
    getElements(): React.ReactElement[];
    find(selector: string): ReactWrapper<any, any>;
    prop(key: string): any;
    text(): string;
    [key: string]: any;
  }
}
