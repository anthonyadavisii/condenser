import React from 'react';
import HelpContent from 'app/components/elements/HelpContent';

class Faq extends React.Component {
    render() {
        return (
            <div className="row content-page">
                <HelpContent path="faq" />
            </div>
        );
    }
}

module.exports = {
    path: 'faq.html',
    component: Faq,
};
