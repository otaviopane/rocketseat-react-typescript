import React, { Component } from 'react';

interface Repository {
    id: number
    name: string
}


interface Props {
    repositories: Repository[]
}


export default class RepositoryList extends Component<Props> {
    state = {
        newRepository: '',

    }
    render() {
        const { repositories } = this.props;


        return <h1>Hello World</h1>;
    }
}