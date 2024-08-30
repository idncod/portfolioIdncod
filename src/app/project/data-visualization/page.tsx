'use client'
import { FC } from 'react';
import styles from './DataVisualization.module.scss';
import CustomLineChart from '../../../components/LineChart';

interface DataPoint {
    name: string;
    value: number;
}

const dummyData: DataPoint[] = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
    { name: 'Jun', value: 239 },
    { name: 'Jul', value: 349 },
    { name: 'Aug', value: 200 },
    { name: 'Sep', value: 278 },
    { name: 'Oct', value: 189 },
    { name: 'Nov', value: 400 },
    { name: 'Dec', value: 300 },
];

const DataVisualizationPage: FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Project Data Visualization</h1>
            <div className={styles['chart-wrapper']}>
                <div className={styles.chart}>
                    <CustomLineChart data={dummyData} />
                </div>
            </div>
        </div>
    );
};

export default DataVisualizationPage;
