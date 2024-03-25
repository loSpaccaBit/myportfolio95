import React, { useState, useCallback } from "react";
import { Panel, Button, GroupBox, TreeView } from "react95";

function Tree({ data }) {
    const [selected, setSelected] = useState('');
    const [expanded, setExpanded] = useState(['lavoro']);

    const handleExpandClick = useCallback(() => {
        setExpanded(oldExpanded => (oldExpanded.length === 0 ? getAllIds(data) : []));
    }, [data]);

    const getAllIds = (items) => {
        return items.flatMap(item => {
            let ids = [item.id];
            if (item.items) {
                ids.push(...getAllIds(item.items));
            }
            return ids;
        });
    };

    const handleNodeSelect = (_, id) => {
        setSelected(id);
    };

    const handleNodeToggle = (_, ids) => {
        setExpanded(ids);
    };

    return (
        <div style={{ maxWidth: '400px' }}>
            <Panel>
                <Button onClick={handleExpandClick}>
                    {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
                </Button>
            </Panel>

            <GroupBox label='Catalog'>
                <TreeView
                    tree={data}
                    onNodeSelect={handleNodeSelect}
                    onNodeToggle={handleNodeToggle}
                    expanded={expanded}
                    selected={selected}

                />
            </GroupBox>
        </div>
    );
}

export { Tree };
