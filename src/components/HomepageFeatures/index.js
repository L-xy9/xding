import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  /*{
    title: '目标愿景',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      帮助环卫劳动力提高绩效和收入，帮助环卫企业降本合规、提质增效，提升企业竞争优势。
      </>
    ),
  },*/
 
  {
    title: '目标愿景',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
      致力于帮助环卫劳动力提高绩效和收入，帮助环卫企业降本合规、提质增效，提升企业竞争优势。
      </>
    ),
  },
 {
    title: '价值主张',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
       创造公平的考核环境，提高员工满意度和敬业度能有效提高作业质量，企业向管理要效益，降低成本同时提高作业品质。
      </>
    ),
  },
  {
    title: '客户成功',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        我们致力于帮助客户成功，满足客户需求，从创造出色的产品到通过服务增加价值。
      </>
    ),
  },

];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
