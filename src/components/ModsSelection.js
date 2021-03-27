import React from 'react';
import { Tag, Tooltip } from 'antd';

const { CheckableTag } = Tag;
const tagsData = ['Freemod', 'EZ', 'NF', 'HT', 'HR', 'SD', 'DT', 'HD', 'FL', 'RL', 'AP', 'SO'];
const tagTooltipMapping = {
    EZ: 'Easy',
    NF: 'No Fail',
    HT: 'Half Time',
    HR: 'Hard Rock',
    SD: 'Sudden Death',
    DT: 'Double Time',
    HD: 'Hidden',
    FL: 'Flashlight',
    RL: 'Relax',
    AP: 'Auto Pilot',
    SO: 'Spin Out',
    Freemod: 'Freemod'
};

export class ModsSelection extends React.Component {
    state = {
        selectedTags: ['Freemod']
    };

    handleChange(tag, checked) {
        const { selectedTags } = this.state;
        let nextSelectedTags;
        nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        if (tag === 'Freemod') {
            nextSelectedTags = [tag];
        } else {
            nextSelectedTags = nextSelectedTags.filter(t => t !== 'Freemod');
        }
        console.log(nextSelectedTags);

        this.setState({ selectedTags: nextSelectedTags });
    }

    render() {
        const { selectedTags } = this.state;

        // {this.tagTooltipMapping.hasOwnProperty(tag) &&
        //     <Tooltip placement="topLeft" title={tagTooltipMapping[tag]}>
        // }

        return (
            <>
                {tagsData.map(tag => (
                    <Tooltip placement="topLeft" title={tagTooltipMapping[tag]} key={tag} arrowPointAtCenter>
                        <CheckableTag
                            key={tag}
                            checked={selectedTags.indexOf(tag) > -1}
                            onChange={checked => this.handleChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    </Tooltip>
                ))}
            </>
        );
    }
}