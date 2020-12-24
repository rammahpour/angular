
    export interface Entity {
        type: string;
        formatted_address: string;
        entity_id: string;
        name: string;
    }

    export interface Result {
        relevance: number;
        id: string;
        title: string;
        description: string;
        category: string;
        labels: string[];
        rank: number;
        local_rank?: number;
        aviation_rank?: number;
        phq_attendance?: number;
        entities: Entity[];
        duration: number;
        start: Date;
        end: Date;
        updated: Date;
        first_seen: Date;
        timezone: string;
        location: number[];
        scope: string;
        country: string;
        place_hierarchies: string[][];
        state: string;
        brand_safe: boolean;
    }

    export interface  MyEvent{
        count: number;
        overflow: boolean;
        next: string;
        previous?: any;
        results: Result[];
    }
