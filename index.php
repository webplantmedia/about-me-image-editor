<!DOCTYPE html>
<html>
    <head>
        <title>About me Image Creator</title>
        <link href='http://fonts.googleapis.com/css?family=Sacramento|Dosis:200,300|Hammersmith One' rel='stylesheet' type='text/css'>
        <link href="deploy/style.min.css" rel="stylesheet"/>
    </head>
    <body>
        <header>
            <h1>about me</h1>
            <h2>Image Creator</h2>
            <h3>Create an about me image for your blog's sidebar</h3>
        </header>
        <section class="clearfix">
            <nav class="templates clearfix">
                <h2>Quick start templates</h2>
                <div class="list clearfix"></div>
                <div class="more" data-start="0">more</div>
            </nav>
            <section class="content editor">
                <input type="file" id="upload" class="hidden" />
                <input type="file" id="background" class="hidden" />
                <div class="body">
                    <?php
                    if (isset($_GET['editor'])) {
                        ?>
                        <div title="Toggle template data" class="tips get-template"></div>
                        <textarea readonly onfocus="this.select();" class="out hidden"></textarea>
                        <?php
                    }
                    ?>
                    <div title="Reset the workspace" class="tips reset"></div>
                    <div id="editor"></div>
                    <div class="progress">
                        <span>loading</span>
                    </div>
                </div>
                <div class="tools">
                    <nav class="toolbar">
                        <ul></ul>
                    </nav>
                    <div class="panels"></div>
                </div>
            </section>
            <nav class="output">
                <h2>1. Upload a photo</h2>
                <div class="button upload">Browse</div>
                <h2>2. Edit &amp; Play</h2>
                Add text, photo filters, clip art and more!
                <h2>3. Download</h2>
                <div class="button download">Save</div> to your computer
                <div class="ad">
                    ad here
                </div>
            </nav>
        </section>
        <footer>
            A Creation of<br />www.angiemakes.com
        </footer>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="deploy/prerequisites.min.js"></script>
        <script src="deploy/editor.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js"></script>
        <script>
                            $(document).ready(function() {
                                /* Boot up the editor and sail away */
                                new ImageEditor();
                            });
        </script>
    </body>
</html>
