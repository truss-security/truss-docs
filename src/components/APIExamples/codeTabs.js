import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export const codeTabs = ({ example }) => {
    return (
        <Tabs>
            <TabItem value="curl" label="curl" default>
                <CodeBlock language="shell" showLineNumbers>
                    {example.curl}
                </CodeBlock>
            </TabItem>
            <TabItem value="javascript" label="javascript">
                <CodeBlock language="javascript" showLineNumbers>
                    {example.javascript}
                </CodeBlock>
            </TabItem>
            <TabItem value="python" label="python">
                <CodeBlock language="python" showLineNumbers>
                    {example.python}
                </CodeBlock>
            </TabItem>
            <TabItem value="ruby" label="ruby">
                <CodeBlock language="ruby" showLineNumbers>
                    {example.ruby}
                </CodeBlock>
            </TabItem>
            <TabItem value="go" label="go">
                <CodeBlock language="go" showLineNumbers>
                    {example.go}
                </CodeBlock>
            </TabItem>
            <TabItem value="rust" label="rust">
                <CodeBlock language="rust" showLineNumbers>
                    {example.rust}
                </CodeBlock>
            </TabItem>
        </Tabs>
    );
}; 