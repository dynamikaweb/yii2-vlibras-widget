<?php 

namespace dynamikaweb\vlibras;

class Vlibras extends \yii\base\Widget 
{
    /**
     * can be used anywhere in the view
     * 
     * @return string
     */
    public function run()
    {
        return $this->view->registerJS(strtr($this->renderFile('@vendor/dynamikaweb/yii2-vlibras-widget/assets/script.js'), [
            '{main.html}' => $this->renderFile('@vendor/dynamikaweb/yii2-vlibras-widget/assets/main.html')
        ]),
            $this->view::POS_END
        );
    }
}
