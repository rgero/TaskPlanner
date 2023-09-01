import React, {FC, ReactNode} from 'react';

interface IComposeContext {
    components?: FC<{children?:ReactNode}>[],
    children?: ReactNode | undefined

}

const ComposeContext = (props:IComposeContext) => 
{
    const {components = [], children} = props;
    return <>
        {
            components.reduceRight((acc, Comp:any)=> {
                return <Comp>{acc}</Comp>
            }, children)
        }
    </>
}

export default ComposeContext;